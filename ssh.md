# What is SSH ?

SSH(Secure shell) is a cryptographic protocol that lets two machines trust each other ***without passwords***

in Git : 
   - Your computer = client
   - GitHub = server
   - SSH proves you are you

-------------------

# 🔑 What is an SSH key ? 
An SSH key is a pair:
| Key | location | Secret? |
|-----|----------|---------|
|Private Key|  your computer | ❌Never Share |
|Public key |Github/server|✅ Safe to share |

They are mathematically linked.

----------------------------

## Basic Setup :
1️⃣ Check existing SSH keys:
```bash
ls ~/.ssh
```
if you see:
   - ```id_ed25519```
   - ```id_ed25519.pub```
You already have keys.
---------
2️⃣ Generate a new SSH key (modern & recommended)
```bash
ssh-keygen -t ed25519 -C "you@email.com"
```
Press enter For: 
   - file location 
   - passphrase(optional but recommended) 
------
3️⃣ Files Created
```text 
~/.ssh/id_ed25519     -> PRIVATE KEY
~/.ssh/id_ed25519.pub -> PUBLIC KEY
```
🚨Never Commit or share private key

------------------
4️⃣ Start SSH agent

The agent holds your key in memory
```bash
eval"$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

5️⃣ Add public key to GitHub
```bash
cat ~/.ssh/id_ed25519.pub
```
copy output -> github -> settings -> ssh and GPG keys -> New SSH key

------------------

6️⃣ Test Connection
```bash 
ssh -T git@github.com
```
Success:
```rust
HI USERNAME! You've Successfully authenticated
```
-------------------------

# Using ssh with git (professional usage)

Change repository remote to SSH:
```bash
git remote -v
git remote set-url origin git@github.com:USERNAME/REPO.git
```
Now git operations:
```bash
git push
git pull
git fetch
```
✔️No username
✔️No password
✔️No token

🧠What Git actually Does:
   - Git calls SSH
   - SSH uses your private key
   - GitHub verifies public key
   - Git proceeds

Git itself never handles passwords

-----------------------

# Security and best practice (Advanced)
Use a passphrase(IMPORTANT)

When generating:
```bash
ssh-keygen -t ed25519
```
passphrase protects your private key if stolen

## Auto-Load SSH key on login
Create/edit:
```bash
~/.ssh/config
```
```text
Host github.com
   AddKeysToAgent yes 
   IdentityFile ~/.ssh/id_ed25519
```

# 🔍 Key permissions (Linux / macOS)
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/
```

# Multiple Github Account(Expert)

Why needed ?
   - Work account
   - Personal account
   - Client accounts

1️⃣ Create Separate Keys
```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_work
ssh-keygen -t ed25519 0f ~/.ssh/id_ed25519_personal
```
2️⃣ SSH config
```text
Host github-work
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_ed25519_work

Host github-personal
   HostName github.com
   User git
   IdentifyFile ~/.ssh/id_ed25519_personal
```
3️⃣Use correct remote
```bash
git remote set-url origin git@github-work:ORG/REPO.git
```

# SSH on servers And CI?CD (Pro Level)
SSH on VPS
```bash
ssh user@server-ip
```
ADD your public key to:
```bash
~/.ssh/authorized_keys
```
GitGub deploy keys:
   - Repo-specific SSH keys
   - Read-only or write
   - Used in servers , CI/CD

-------

# Debugging And Troubleshooting (Expert level)
Debug SSH connection
```bash 
ssh -v git@github.com
```

Common errors

❌ Permission denied (publicKey)
   - key not added
   - Agent not running
   - Wrong SSH config

❌Repository not found
   - No access
   - Wrong remote

--------------
---------------
# Mental Model (This make you  pro)

✔️SSH not Git

✔️Git uses SSH as transport

✔️Private key never leaves you machine

✔️Public key identifies you

✔️SSH agent manages access

✔️Config file controls behavior


## Final Recommendation
   - Use ed25519
   - Always use ssh for work
   - Use multiple keys for multiple roles
   - Protect keys with passphrase
   - Understand SSH not just commands