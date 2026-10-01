<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep KainGo's prototype flow and heuristics inspector client-side in one focused component; it demonstrates interactions without requiring persistence or a backend.
- Keep the six prototype views as internal screen state on `/`; this preserves the fixed 390 × 844 device preview and shared ordering state across views.
