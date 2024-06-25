import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NameSuggestionTitle } from "../nameSuggestion/NameSuggestionTitle";

export const DomainCheckCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="domain" source="domain" />
        <BooleanInput label="isAvailable" source="isAvailable" />
        <ReferenceInput
          source="nameSuggestion.id"
          reference="NameSuggestion"
          label="nameSuggestion"
        >
          <SelectInput optionText={NameSuggestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
