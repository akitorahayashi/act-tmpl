# Usage

`act-tmpl` renders a final message string from action inputs.

## Standard Workflow Usage

```yaml
- uses: akitorahayashi/act-tmpl@v1
  with:
    message: hello world
```

This default form emits `hello world` as `rendered-message`.

## Input Behavior

The action reads:

- required `message`
- optional `prefix`
- optional `suffix`
- optional `uppercase`

The output surface is:

- `rendered-message`

## Rendering Example

```yaml
- uses: akitorahayashi/act-tmpl@v1
  with:
    message: world
    prefix: hello
    suffix: again
    uppercase: true
```

The emitted output in this example is `HELLO WORLD AGAIN`.

## Local Verification

Repository-local verification commands are:

- `just fix`
- `just check`
- `just test`

`just fix` applies formatter and safe lint updates.
`just check` covers formatter, lint, and typecheck validation on source changes.

Targeted pnpm commands remain available behind the `just` recipes:

- `pnpm format`
- `pnpm format:check`
- `pnpm lint`
- `pnpm lint:fix`
- `pnpm test`
- `pnpm typecheck`
- `pnpm package`
