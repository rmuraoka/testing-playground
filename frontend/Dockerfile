# ベースイメージとしてNode.jsを使用
FROM node:14

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションコードをコピー
COPY ../.. .

# 開発サーバーが動作するポートを公開
EXPOSE 3000

# Reactの開発サーバーを起動
CMD ["npm", "start"]
