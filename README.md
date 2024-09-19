# star-finder

StarFinder は、GitHub のリポジトリの中で、指定した日付範囲内で最もスター数の多いプロジェクトを取得する CLI アプリケーションです。GitHub の API を利用して、リポジトリを検索し、スター数でソートされたリポジトリを表示します。

## 機能

- 指定した日付範囲内で作成された GitHub リポジトリの中で、スター数が最も多いリポジトリを取得
- リポジトリ名、スター数、リポジトリURLを表示



## インストール

1. リポジトリをクローンします。
```bash
git clone https://github.com/kazumal/star-finder.git
cd star-finder
   ```
2. 必要な依存ライブラリをインストールします。

  ```bash
  npm install
  ```
3. スクリプトに実行権限を付与します（オプション）。
```bash
chmod +x github-stars-cli.js
```

### 使い方
以下のコマンドで、指定した日付範囲内で最もスター数の多い GitHub リポジトリを取得します。

### 例: 日付範囲での検索
```bash
./github-stars-cli.js --start 2023-01-01 --end 2023-12-31
```

または node コマンドを使用しても実行可能です。
```bash
node github-stars-cli.js --start 2023-01-01 --end 2023-12-31

```

## コマンドラインオプション
- --start(-s) <date>: 検索範囲の開始日（必須）
- --end(-e) <date>: 検索範囲の終了日（必須）
日付は YYYY-MM-DD の形式で指定してください。
