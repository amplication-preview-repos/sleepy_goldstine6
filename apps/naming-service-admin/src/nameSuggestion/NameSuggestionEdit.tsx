import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DomainCheckTitle } from "../domainCheck/DomainCheckTitle";
import { SuggestionRequestTitle } from "../suggestionRequest/SuggestionRequestTitle";

export const NameSuggestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="domainChecks"
          reference="DomainCheck"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DomainCheckTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isChosen" source="isChosen" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="suggestionRequest.id"
          reference="SuggestionRequest"
          label="suggestionRequest"
        >
          <SelectInput optionText={SuggestionRequestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
