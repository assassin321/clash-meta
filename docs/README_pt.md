<h1 align="center">
  <img src="../src-tauri/icons/icon.png" alt="Clash" width="128" />
</h1>

<h3 align="center">
Uma interface gráfica para o Clash Meta construída com <a href="https://github.com/tauri-apps/tauri">Tauri</a>.
</h3>

<p align="center">
  Idiomas:
  <a href="./README_en.md">English</a> ·
  <a href="./README_es.md">Español</a> ·
  <a href="./README_fa.md">فارسی</a> ·
  <a href="./README_ja.md">日本語</a> ·
  <a href="./README_ko.md">한국어</a> ·
  <a href="./README_pt.md">Português</a> ·
  <a href="./README_ru.md">Русский</a> ·
  <a href="../README.md">简体中文</a>
</p>

## Instalação

Acesse a [página de lançamentos](https://github.com/assassin321/clash-meta/releases) e baixe o instalador correspondente à sua plataforma.<br>
Oferecemos pacotes para Windows (x64/x86), Linux (x64/arm64) e macOS 10.15+ (Intel/Apple).

---

## Funcionalidades

- Baseado em Rust de alto desempenho e no framework Tauri 2
- Inclui o núcleo integrado [Clash.Meta (mihomo)](https://github.com/MetaCubeX/mihomo) e permite trocar para o canal `Alpha`
- Interface limpa e elegante, com controles de cor do tema, ícones de grupos de proxy/bandeja e `CSS Injection`
- Gerenciamento avançado de perfis (ferramentas Merge e Script) com sugestões de sintaxe para as configurações
- Controle do proxy do sistema, modo guardião e suporte a `TUN` (adaptador de rede virtual)
- Editores visuais para nós e regras
- Backup e sincronização via WebDAV


## Desenvolvimento

Consulte o [CONTRIBUTING.md](../CONTRIBUTING.md) para ver as diretrizes de contribuição.

Depois de instalar todos os pré-requisitos do **Tauri**, execute o ambiente de desenvolvimento com:

```shell
pnpm i
pnpm run prebuild
pnpm dev
```

## Contribuições

Issues e pull requests são bem-vindos.

## Agradecimentos

Clash Meta é baseado nos projetos a seguir, ou se inspira neles:

- [clash-verge-rev/clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev): A Clash GUI based on tauri. Supports Windows, macOS and Linux.
- [zzzgydi/clash-verge](https://github.com/zzzgydi/clash-verge): Interface gráfica para o Clash baseada em Tauri. Compatível com Windows, macOS e Linux.
- [tauri-apps/tauri](https://github.com/tauri-apps/tauri): Crie aplicativos de desktop menores, mais rápidos e mais seguros com um frontend web.
- [Dreamacro/clash](https://github.com/Dreamacro/clash): Túnel baseado em regras escrito em Go.
- [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo): Túnel baseado em regras escrito em Go.
- [Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg): Interface do Clash para Windows e macOS.
- [vitejs/vite](https://github.com/vitejs/vite): Ferramentas de frontend de nova geração com uma experiência ultrarrápida.

## Licença

Licença GPL-3.0. Consulte o [arquivo de licença](../LICENSE) para mais detalhes.
