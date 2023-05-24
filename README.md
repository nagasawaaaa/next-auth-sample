## NextAuth 素振り

下記を元に構築したけど appディレクトリに対応していなかった。

- [【NextAuth.js 入門】認証機能から認証情報によるページの表示制御を学ぶ（Next.js & Typescript）](https://zenn.dev/farstep/books/7a6eb67dd3bf1f)

なので、下記記事を参考にしつつ、appディレクトリに対応させた。

- [Next.js v13でNextAuth v4を動かせた話](https://zenn.dev/ayaextech_fill/articles/next13_nextauth_googlelogin_movie)

## 環境変数

基本的に [【NextAuth.js 入門】認証機能から認証情報によるページの表示制御を学ぶ（Next.js & Typescript）](https://zenn.dev/farstep/books/7a6eb67dd3bf1f) で指示されている内容を反映させる。

```dotenv
DATABASE_URL=xxxxxxxxxxxxxxx
GITHUB_ID=xxxxxxxxxxxxxxx
GITHUB_SECRET=xxxxxxxxxxxxxxx
NEXTAUTH_URL=xxxxxxxxxxxxxxx
SECRET=xxxxxxxxxxxxxxx
```

## ローカルでの実行

### Dockerを立ち上げる

```bash
$ docker-compose up -d
```

### アプリケーション起動

```bash
$ npm run dev
```
