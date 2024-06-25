import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { NAMESUGGESTION_TITLE_FIELD } from "../nameSuggestion/NameSuggestionTitle";

export const DomainCheckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
