import { StructureBuilder } from "sanity/desk"

import listItems from './listItems'

export default (S: any) => S.list().id('_settings').items(listItems([], S))