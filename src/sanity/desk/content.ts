import { StructureBuilder } from 'sanity/desk'

import listItems from './listItems'

export default (S: any) => S.list().id('_content').items([
    S.listItem()
        .title('Misc')
        .id('item-misc')
        .child(
            S.list()
                .id('list-misc')
                .items([
                    S.documentListItem()
                        .title("Header")
                        .schemaType('header')
                        .id('settings-header'),
                    S.documentListItem()
                        .title("Footer")
                        .schemaType('footer')
                        .id('settings-footer')
                ])
        ),
    ...listItems(['page', 'post', 'work'], S)
])