# testing-playground
各種ドキュメンテーションツールや自動テストの学習環境です。

## 環境構築
1. **Node.jsとnpmのインストール**
    - [Node.js公式サイト](https://nodejs.org/) から最新版のLTSバージョンをダウンロードしてインストールしてください。
    - インストール後、以下のコマンドでバージョンを確認できます：
      ```bash
      node -v
      npm -v
      ```

2. **Dockerのインストール**
    - [Docker公式サイト](https://www.docker.com/) からDocker Desktopをダウンロードし、インストールします。
    - インストール後に以下のコマンドでDockerの動作確認を行います：
      ```bash
      docker --version
      ```

3. **環境変数の設定**
   - ルートディレクトリにある`.env.sample`ファイルを複製し、`.env`ファイルを作成します。
   - 必要に応じて`.env`ファイル内の環境変数を設定してください。

4. **依存関係のインストール**
   - ルートディレクトリ、`/frontend`ディレクトリ、および`/backend`ディレクトリで以下のコマンドを実行し依存関係をインストールします。
     ```bash
     npm install
     ```

5. **環境の立ち上げ**
   - 以下のコマンドで立ち上がります。
     ```bash
     docker compose up -d
     ```
     
## 各種テスト、ドキュメンテーションツールの実行
1. **Swagger**
   - APIのドキュメンテーションツールです。
   - 環境が立ち上がっている場合、http://localhost:5000/api-docs/ にアクセスすると閲覧可能です。

2. **Storybook**
   - UIカタログです。
   - `/frontend`ディレクトリ上で以下のコマンドを実行すると立ち上げられます。Dockerを立ち上げる必要はありません。
     ```bash
     npm run storybook
     ```
     
3. **ESLint**
   - 静的解析ツールです。
   - `/frontend`ディレクトリ、および`/backend`ディレクトリで以下のコマンドを実行すると立ち上げられます。Dockerを立ち上げる必要はありません。
     ```bash
     npx eslint .
     ```
     
4. **Jest**
   - 単体テストのフレームワークです。
   - 単体テストは`/frontend`ディレクトリ、および`/backend`ディレクトリで以下のコマンドを実行すると立ち上げられます。Dockerを立ち上げる必要はありません。
     ```bash
     npm test
     ```
   - 以下のコマンドでカバレッジの出力も可能です。
     ```bash
     npm test -- --coverage
     ```
5. **Storybook のテストランナー**
   - スナップショットテストツールです。
   - スナップショットテストは`/frontend`ディレクトリで以下のコマンドを実行すると立ち上げられます。Dockerを立ち上げる必要はありませんが、Storybookを起動している必要があります。
     ```bash
     npx test-storybook
     ```

6. **Playwright**
   - E2Eのフレームワークです。
   - E2Eはルートディレクトリ上で以下のコマンドを実行すると立ち上げられます。Dockerの起動が必要です。
     ```bash
     npm test
     ```

## その他
1. **アプリケーションの利用**
   - http://localhost:3000/ にアクセスすることで利用できます
1. **DB（PostgreSQL）**
   - DBeaverなどのツールに以下の情報を入力することで接続できます
   - host: localhost
   - port: 5433
   - database: .envのDB_NAMEの値
   - ユーザー名: .envのDB_USERの値
   - パスワード: .envのDB_PASSWORDの値
