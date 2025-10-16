#!/bin/bash

function main() {
  set -xu
  set +eE
  local -i _err=0
  local binary=""
  if [[ ! -f Cargo.toml  ]]  ; then
  {
      echo "Error here there is no Cargo.toml name "
	  ls -la
      exit ${_err} || 1 
  }
  fi
  binary=$(grep -E 'name'<<<$(grep -A 1 '[[bin]]' Cargo.toml) | cut -d= -f2 | xargs)
  _err=$?
  if [[ -z ${binary} ]] || [ ${_err} -gt 0 ] ; then
  {
    binary=$(grep -E 'name'<<<$(grep -A 10 '[package]' Cargo.toml) | cut -d= -f2 | xargs)
    _err=$?
    if [[ -z ${binary} ]] || [ ${_err} -gt 0 ] ; then
    {
      echo "Error finding name "
      exit ${_err} || 1
    }
    fi
  }
  fi

  if [[ -z ${binary} ]] ; then
  {
      echo "Error finding name "
      exit ${_err} || 1
  }
  fi
  echo "Found binary: ${binary}"
  clear
  echo "cargo build --release"
  local -i _err=0
  cargo fmt
  ramcargo --release
  _err=$?
  [[ ${_err} -gt 0 ]] && echo "clipping" && . ./xclipit.bash && exit ${_err}

  set -eE
  ls -lah target/release/${binary}

  # GNU strip, just in case
  /usr/bin/strip --strip-all target/release/${binary}
  ls -lah target/release/${binary}

  # UPX pack (optional; trades some startup CPU for much smaller size)
  /usr/bin/upx --best --lzma target/release/${binary}
  ls -lah target/release/${binary}

  # 6) Audit what’s heavy
  # Use these to see where bytes go:
  # cargo bloat --release -n 20
  # twiggy top -p target/release/${binary}   # if using wasm tools, optional
  mv target/release/${binary} .
  ./${binary}
}

main
