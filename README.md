# 🟩 im-busy

A **Node.js** script that fills your GitHub contributions graph with green squares.  
It generates commits with randomly distributed dates over the past year to simulate continuous activity.  

<br>

## 🚀 Features

- Generates fake commits in your repository.  
- Assigns random dates to each commit within the past year.  
- Automatically updates the contributions graph on your GitHub profile.  
- Lets you customize how many commits are generated.  

<br>

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USER/im-busy.git
   cd im-busy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an empty `data.json` file in the project root:
   ```bash
   echo "{}" > data.json
   ```

<br>

## 📝 Usage

1. Edit the script `index.js` and adjust the number of commits:  
   ```js
   makeCommit(100); // Change 100 to the desired number of commits
   ```

2. Run the script:
   ```bash
   node index.js
   ```

3. Once finished, the commits will be pushed to the remote repository and will appear in your GitHub contributions graph.  

<br>

## ⚠️ Disclaimer

This script is intended **for educational and experimental purposes only**.  
Generating fake activity on your profile may go against GitHub’s best practices.  
Use it at your own risk.  

<br>

## 👩‍💻 Contributing

1. Fork the repo.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/new-function
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add new function"
   ```
4. Push your branch and create a Pull Request.  

<br>

## 📄 License

This project is open source under the [APACHE 2.0](LICENSE) license.  
