# ベースイメージとして Node.js の公式イメージを使用
FROM node:14

# 必要なパッケージをインストール
RUN apt-get update && apt-get install -y python make g++

# 作業ディレクトリを指定
WORKDIR /app

# パッケージファイル（package.json, package-lock.json）をコピー
COPY package*.json ./

# 依存パッケージのインストール
RUN npm install

# アプリケーションのソースコードを全てコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 5000

# アプリケーションの起動コマンド
CMD ["npm", "start"]
