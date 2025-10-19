# 🧙‍♂️ JupyterMagics for MariaDB

**Seamless SQL in Jupyter Notebooks — Powered by MariaDB**

JupyterMagics for MariaDB brings native `%mariadb` magic commands to Jupyter notebooks, allowing data scientists and analysts to run SQL queries, visualize results, and interact with MariaDB directly — without writing boilerplate code or switching tools.

---

## 🚀 Features

- ✅ Inline SQL execution with `%%mariadb` magic
- 📊 Automatic result formatting into Pandas tables and Matplotlib charts
- 🧠 Schema introspection and autocomplete
- ⚠️ Error highlighting and query history
- 📁 Demo notebook with real-world examples

---

## 📦 Installation

```bash
pip install mariadb-magic
🔧 Getting Started
1. Load the Extension
python
%load_ext mariadb_magic
2. Connect to Your MariaDB Database
python
%%mariadb_connect host=localhost user=root password=your_password database=mydb
3. Run SQL Queries Inline
python
%%mariadb
SELECT region, SUM(revenue) FROM sales GROUP BY region;
Results are automatically displayed as formatted tables and charts.

📊 Demo Notebook
Explore the full demo at: mariadb-magic-spark.lovable.app

Includes:

Sales data analysis

Schema exploration

Error handling showcase

Visualization examples

🛣️ Roadmap
📦 Submit to PyPI and JupyterCon

🧬 Add support for MariaDB Vector queries and embeddings

🎓 Integrate with educational platforms

💻 Extend to VS Code notebooks and Google Colab

🤖 AI-powered query suggestions

🤝 Contributing
We welcome contributions! Please open issues, submit pull requests, or suggest features.
