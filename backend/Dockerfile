# ベースイメージとして Node.js の公式イメージを使用
FROM node:16

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
