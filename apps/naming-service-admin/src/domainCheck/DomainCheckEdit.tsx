import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NameSuggestionTitle } from "../nameSuggestion/NameSuggestionTitle";

export const DomainCheckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
