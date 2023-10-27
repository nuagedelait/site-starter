import { StructureBuilder } from "sanity/desk"

import listItems from './listItems'

export default (S: any) => S.list().id('_managment').items(listItems(['author', 'client'], S))