import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { NAMESUGGESTION_TITLE_FIELD } from "./NameSuggestionTitle";
import { SUGGESTIONREQUEST_TITLE_FIELD } from "../suggestionRequest/SuggestionRequestTitle";

export const NameSuggestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DomainCheck"
          target="nameSuggestionId"
          label="DomainChecks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="domain" source="domain" />
            <TextField label="ID" source="id" />
            <BooleanField label="isAvailable" source="isAvailable" />
            <ReferenceField
              label="nameSuggestion"
              source="namesuggestion.id"
              reference="NameSuggestion"
            >
              <TextField source={NAMESUGGESTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
