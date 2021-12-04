#include <vector>
#include <iostream>

typedef std::vector<std::vector<int>> matrix;

int main()
{
  int people_in_network, relation_count;

  std::cin >> people_in_network;
  std::cin.ignore();
  std::cin >> relation_count;

  matrix m = {};

  // initialize vector
  for (int i = 0; i < people_in_network; ++i)
  {
    std::vector<int> vec = {};
    for (int j = 0; j < people_in_network; j++)
    {
      vec.push_back(0);
    }
    m.push_back(vec);
  }

  // populate relations
  for (int i = 0; i < relation_count; ++i)
  {
    int origin, target;
    std::cin >> origin >> target;

    m.at(origin - 1).at(target - 1)++;
  }

  // each row is the people with n friends
  std::vector<int> hist1(people_in_network, 0);
  // each row is how many people have n people as friends
  std::vector<int> hist2(people_in_network, 0);
  for (int i = 0; i < people_in_network; ++i)
  {
    int friend_count = 0;
    int inverse_friend_count = 0;
    for (int j = 0; j < people_in_network; ++j)
    {
      if (m.at(i).at(j) > 0)
      {
        ++friend_count;
      }
      if (m.at(j).at(i) > 0)
      {
        ++inverse_friend_count;
      }
    }
    hist1.at(friend_count)++;
    hist2.at(inverse_friend_count)++;
  }

  std::cout << "Histograma 1" << std::endl;
  for (size_t i = 0; i < hist1.size(); ++i)
  {
    std::cout << hist1.at(i) << std::endl;
  }

  std::cout << "Histograma 2" << std::endl;
  for (size_t i = 0; i < hist1.size(); ++i)
  {
    std::cout << hist2.at(i) << std::endl;
  }

  matrix common_friends;
  // initialize vector
  for (int i = 0; i < people_in_network; ++i)
  {
    std::vector<int> vec = {};
    for (int j = 0; j < people_in_network; j++)
    {
      vec.push_back(0);
    }
    common_friends.push_back(vec);
  }

  for (int i = 0; i < people_in_network; ++i)
  {
    for (int j = 0; j < people_in_network; ++j)
    {
      int common_count = 0;
      for (int k = 0; k < people_in_network; ++k)
      {
        if (m.at(i).at(k) > 0 && m.at(j).at(k) > 0)
        {
          ++common_count;
        }
      }
      common_friends.at(i).at(j) = common_count;
    }
  }

  std::cout << "Common Friends" << std::endl;

  for (int i = 0; i < people_in_network; ++i)
  {
    for (int j = 0; j < people_in_network; j++)
    {
      std::cout << common_friends.at(i).at(j);
    }
    std::cout << std::endl;
  }

  return 0;
}
