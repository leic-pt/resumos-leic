{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            yarn
          ];

          shellHook = ''
            export PUPPETEER_SKIP_DOWNLOAD=1
            export PUPPETEER_EXECUTABLE_PATH=${pkgs.chromium.outPath}/bin/chromium
          '';
        };
      }
    );
}
