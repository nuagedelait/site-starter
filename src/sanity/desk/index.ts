import { StructureBuilder } from 'sanity/desk';

import {
    ControlsIcon,
    DocumentIcon
} from '@sanity/icons';

import settings from './settings';
import management from './managment';
import content from './content';


export default (S: StructureBuilder) =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Settings')
                .icon(ControlsIcon)
                .child(
                    settings(S)
                ),
            S.listItem()
                .title('Management')
                .icon(DocumentIcon)
                .child(
                    management(S)
                ),
            S.listItem()
                .title('Content')
                .icon(DocumentIcon)
                .child(
                    content(S)
                )
        ])


