import React from 'react';
import { FormBuilderInput, PatchEvent } from 'part:@sanity/form-builder';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import {
  setIfMissing,
  set,
  unset,
} from 'part:@sanity/form-builder/patch-event';

const VimeoInput = ({
  type,
  level,
  value,
  focusPath,
  onFocus,
  onChange,
  onBlur,
}) => {
  // Fetch vimeo data
  const getData = async url => {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${url}&width=1920`
    ).catch(e => console.error(e));

    if (res) {
      return await res.json().catch(e => console.error(e));
    }
  };

  const handleFieldChange = async (field, fieldPatchEvent) => {
    // Set initial value
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    );

    // Update Vimeo Fields
    if (field.name === 'url') {
      const patch = fieldPatchEvent.patches.find(item => item.type === 'set');

      if (patch && patch.value && patch.value.includes('vimeo.com')) {
        const data = await getData(patch.value);

        if (data) {
          const { width, height, title, thumbnail_url } = data;

          // Update the fields with the new data
          onChange(
            PatchEvent.from(
              unset(),
              set({
                _type: type.name,
                width,
                height,
                title,
                thumbnail: thumbnail_url,
                url: patch.value,
              })
            )
          );
        }
      }
    }
  };

  return (
    <Fieldset level={level} legend={type.title} description={type.description}>
      {type.fields.map(field => {
        return (
          <div style={{ marginBottom: '1.5rem' }} key={field.name}>
            <FormBuilderInput
              level={level + 1}
              type={field.type}
              value={value && value[field.name]}
              onChange={patchEvent => handleFieldChange(field, patchEvent)}
              path={[field.name]}
              focusPath={focusPath}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        );
      })}
    </Fieldset>
  );
};

export default VimeoInput;
