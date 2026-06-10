$ErrorActionPreference = "Stop"

Set-Location "C:\Users\joeyx\Documents\餐厅项目"

if (-not (Test-Path ".git")) {
  git init
}

git config --global --add safe.directory "C:/Users/joeyx/Documents/餐厅项目"

git branch -M main
git add .

$hasCommit = $true
try {
  git rev-parse --verify HEAD | Out-Null
} catch {
  $hasCommit = $false
}

if ($hasCommit) {
  git commit -m "Update PokeChina Wholesale website" --allow-empty
} else {
  git commit -m "Initial PokeChina Wholesale website"
}

$remoteExists = $false
try {
  git remote get-url origin | Out-Null
  $remoteExists = $true
} catch {
  $remoteExists = $false
}

if ($remoteExists) {
  git remote set-url origin "https://github.com/joeyxia926/pokechina-wholesale.git"
} else {
  git remote add origin "https://github.com/joeyxia926/pokechina-wholesale.git"
}

git push -u origin main

Write-Host "Uploaded to GitHub: https://github.com/joeyxia926/pokechina-wholesale"
