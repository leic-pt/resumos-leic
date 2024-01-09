from git import Repo
import re
import os
import requests

# Path to the local git repository
REPO_PATH = '.'


def get_latest_commit(repo_path):
    """ Get the latest commit from the repository """
    repo = Repo(repo_path)
    commit_sha = os.getenv('GITHUB_SHA')
    if commit_sha:
        print(f"Commit SHA: {commit_sha}")
        return repo.commit(commit_sha)
    else:
        print(f"Repo: {repo}")
        return repo.head.commit



def parse_commit_message(commit):
    """ Extract course code from the commit message """
    match = re.search(r'\[([A-Z]+)\]', commit.message)
    if match:
        course = match.group(1)  # course code in uppercase letters
    else:
        course = None

    contributor = commit.author.name
    print("Commit : ", commit)

    return course, contributor


def update_existing_contributor(contributor, course, contributor_line, contents):
    print(f"Contributor {contributor} found in index.md in line {contents.index(contributor_line)}")
    # Contributor exists, update their course list if necessary

    course_list_start = [index for index, char in enumerate(contributor_line) if char == '('][1]
    course_list_end = [index for index, char in enumerate(contributor_line) if char == ')'][1]
    course_list = contributor_line[course_list_start:course_list_end]

    if course not in course_list:
        # Add course to the existing list
        new_course_list = course_list + ', ' + course
        updated_line = contributor_line.replace(course_list, new_course_list)
        contents[contents.index(contributor_line)] = updated_line
    
    return contents


def add_new_contributor(contributor, course, contents, end_idx, contributor_line):
    print(f"Contributor {contributor} not found in index.md")
    new_contributor_line = f'- [{contributor}](https://github.com/leic-pt/resumos-leic/commits?author={contributor}) ({course})\n'
    contents.insert(end_idx - 1, new_contributor_line)

    return contents


def update_index_md(contributor, course, file_path='content/index.md'):
    """ Update the index.md file with the contributor and course information """
    try:
        with open(file_path, 'r') as file:
            contents = file.readlines()

        start_idx = next((idx for idx, line in enumerate(contents) if "### Contribuidores" in line), None)
        end_idx = next((idx for idx, line in enumerate(contents) if "---" in line and idx > start_idx), None)

        contributors_section = contents[start_idx:end_idx]
        contributor_line = next((line for line in contributors_section if contributor in line), None)

        if contributor_line:
            contents = update_existing_contributor(contributor, course, contributor_line, contents)
        else:
            contents = add_new_contributor(contributor, course, contents, end_idx, contributor_line)

        with open(file_path, 'w') as file:
            file.writelines(contents)


    except IOError as e:
        print(f"An IOError occurred: {e}")



def main():
    commit = get_latest_commit(REPO_PATH)
    print(f"Latest commit: {commit}")
    course, contributor = parse_commit_message(commit)

    print(f"Course: {course}, Contributor: {contributor}")

    if course and contributor:
        update_index_md(contributor, course)

    with open('content/index.md', 'r') as file:
        print(file.read())

if __name__ == "__main__":
    main()
