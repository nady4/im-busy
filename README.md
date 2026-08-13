# 🟩 im-busy

A **Node.js** script that fills your GitHub contributions graph with green squares.  
It generates commits with randomly distributed dates with configurable commit count, weekends and working hours.

<br>

## 🚀 Features

- Generates simulated commits in your repository.
- Assigns random dates to each commit within the past year.
- Automatically updates the contributions graph on your GitHub profile.
- Interactive prompts with defaults before the commits start.
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

Run the script:

```bash
node index.js
```

You'll be asked a few questions before any commits are made. Pressing **Enter** accepts the default shown in brackets:

```
How many commits? [100]:
Include weekends? [n]:
Commit hours range? [9-18]:
Max commits per day? [3]:
Start? [y]:
```

### ⚙️ Options

| Flag                    | Description                      | Default |
| ----------------------- | -------------------------------- | ------- |
| `-n, --count <n>`       | Number of commits to generate    | `100`   |
| `--include-weekends`    | Allow commits on Saturday/Sunday | `false` |
| `--hours <start>-<end>` | Commit hours range (24h)         | `9-18`  |
| `--intensity <n>`       | Max commits allowed per day      | `3`     |

Flags set the defaults for the prompts, so they work together:

```bash
node index.js --count 50 --include-weekends --hours 8-20 --intensity 5
```

Once finished, the commits will be pushed to the remote repository and will appear in your GitHub contributions graph.

<br>

## 🗂️ Project Structure

| File         | Responsibility                                                                                |
| ------------ | --------------------------------------------------------------------------------------------- |
| `index.js`   | Orchestration: flag parsing, prompts, and starting the commit flow                            |
| `args.js`    | CLI flag parsing and validation (`--count`, `--include-weekends`, `--hours`, `--intensity`)   |
| `prompts.js` | Interactive prompts (`askNumber`, `askYesNo`, `askHours`) and hour parsing                    |
| `dates.js`   | `createDatePicker()` — random date generation with weekend, hour, and per-day intensity rules |
| `git.js`     | `generateCommits()` — writes `data.json`, creates dated commits, and pushes                   |

<br>

## ⚠️ Disclaimer

This script is intended **for educational and experimental purposes only**.  
Generating simulated activity on your profile may go against GitHub’s best practices.

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
