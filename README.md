# jxx123.github.io

Personal website for Jinyu Xie, built with plain Jekyll.

## Prerequisites

- **Ruby 3.0+** (macOS ships with 2.6; install a newer version via Homebrew)

  ```bash
  brew install ruby
  ```

  Then add Homebrew Ruby to your PATH (add to `~/.zshrc` to persist):

  ```bash
  export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
  ```

## Install

```bash
bundle install
```

## Local Development

```bash
bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000](http://127.0.0.1:4000).

The site auto-regenerates on file changes — just refresh the browser.

## Project Structure

```
_config.yml          # Jekyll config (title, url, etc.)
_layouts/default.html  # Single-page HTML layout + CSS
index.md             # Main page content (Markdown)
assets/img/          # Images and favicons
Gemfile              # Ruby dependencies
```

Edit `index.md` to update content. Edit `_layouts/default.html` to change the layout or styling.
