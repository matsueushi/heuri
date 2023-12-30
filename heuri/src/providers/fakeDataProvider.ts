import fakeRestDataProvider from "ra-data-fakerest";
import data from "./fakedata.json";

export const dataProvider = fakeRestDataProvider(data, true);
