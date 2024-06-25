import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { SUGGESTIONREQUEST_TITLE_FIELD } from "./SuggestionRequestTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { QUESTIONNAIRE_TITLE_FIELD } from "../questionnaire/QuestionnaireTitle";

export const SuggestionRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="questionnaire"
          source="questionnaire.id"
          reference="Questionnaire"
        >
          <TextField source={QUESTIONNAIRE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="NameSuggestion"
          target="suggestionRequestId"
          label="NameSuggestions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isChosen" source="isChosen" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="suggestionRequest"
              source="suggestionrequest.id"
              reference="SuggestionRequest"
            >
              <TextField source={SUGGESTIONREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
