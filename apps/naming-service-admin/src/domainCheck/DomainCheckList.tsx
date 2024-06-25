import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { NAMESUGGESTION_TITLE_FIELD } from "../nameSuggestion/NameSuggestionTitle";

export const DomainCheckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DomainChecks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
