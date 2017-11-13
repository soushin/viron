viron-textarea.Textarea(class="{ 'Textarea--disabled': opts.isdisabled }" onTap="{ handleTap }")
  .Textarea__label(if="{ !!opts.label }") { opts.label }
  form.Textarea__form(ref="form" onSubmit="{ handleFormSubmit }")
    textarea.Textarea__input(ref="input" value="{ normalizeValue(opts.val) }" placeholder="{ opts.placeholder }" disabled="{ !!opts.isdisabled }" onInput="{ handleTextareaInput }" onChange="{ handleTextareaChange }")

  script.
    import script from './index';
    this.external(script);
