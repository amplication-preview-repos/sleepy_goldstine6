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
import { SUGGESTIONREQUEST_TITLE_FIELD } from "../suggestionRequest/SuggestionRequestTitle";

export const NameSuggestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"NameSuggestions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
