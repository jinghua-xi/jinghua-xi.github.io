#!/bin/sh
set -eu
project_root="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
build_dir="$(mktemp -d "${TMPDIR:-/tmp}/jinghua-cv.XXXXXX")"
trap 'rm -rf "$build_dir"' EXIT HUP INT TERM
for pass in 1 2; do
  pdflatex -interaction=nonstopmode -halt-on-error -output-directory "$build_dir" "$project_root/cv/jinghua-xi-cv.tex" >"$build_dir/compile.log"
done
cp "$build_dir/jinghua-xi-cv.pdf" "$project_root/assets/files/jinghua-xi-cv.pdf"
printf '%s\n' "Updated assets/files/jinghua-xi-cv.pdf"
