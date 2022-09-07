# EC_Shop

Frontend of Electronic Commerce Shop  
created by vite and antd

## Quick Start

### Development in local mode

```bash
yarn install

yarn dev
```

then open browser and go to http://127.0.0.1:5173/

### Environment Variable

create `.env` in root directory and write

```yml
VITE_API=http://localhost:8000
```

## Commit Style

[pre-commit](https://pre-commit.com/)  
[commitizen](https://commitizen-tools.github.io/commitizen/)

### Install package (python for example)

```bash
pip install pre-commit

pip install commitizen
```

### Install rules in your project

```bash
pre-commit install
```

### Submit your commit

```bash
cz commit
```
