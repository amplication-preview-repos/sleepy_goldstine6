import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestionnaireTitle } from "../questionnaire/QuestionnaireTitle";
import { SuggestionRequestTitle } from "../suggestionRequest/SuggestionRequestTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="questionnaires"
          reference="Questionnaire"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionnaireTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="suggestionRequests"
          reference="SuggestionRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
