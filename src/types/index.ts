export type Vdata = {
    code:    number;
    message: string;
    data:    VdataData[];
}

export type VdataData = {
    id:            string;
    title:         string;
    author:        string;
    slug:          string;
    featuredImage: null;
    content:       Content[];
    publish:       DataPublish;
    created_at:    string;
    updated_at:    string;
    deleted_at:    null;
}

export type Content = {
    data: ContentData;
    type: string;
}

export type ContentData = {
    rows:                      Row[];
    margin:                    null;
    bgColor:                   null;
    padding:                   null;
    bg_colour:                 null;
    containerWidth:            string;
    backgroundImage:           string;
    container_width:           null;
    backgroundRepeat:          null | string;
    background_image:          null | string;
    background_repeat:         null;
    backgroundImagePosition:   null | string;
    background_image_position: null;
    fieldGroupName:            string;
    sectionVerticalSpacing: string | null;
    sectionType: string | null;
}

export type Row = {
    column:                    Column[];
    margin:                    null;
    padding:                   null;
    alignItems:                string;
    align_items:               null;
    justifyContent:            string;
    justify_content:           null;
    reverseColumnForMobile:    string;
}

export type Column = {
    align:      string;
    width:      string;
    margin:     string;
    widget:     Widget[];
    padding:    null | string;
    className:  null | string;
    class_name: null;
}

export type Widget = {
    data: WidgetData;
    type: string;
}

export type WidgetData = {
    color?:              null;
    heading?:            string;
    fontSize?:           null | string;
    alignment?:          null | string;
    lineHeight?:         number | string;
    headingLevel?:       string;
    fieldGroupName?:     string;
    paragraph?:          string | null;
    options?:            Option[];
    type?:               string[];
    align?:              string;
    width?:              null | string | number;
    marginTopAndBottom?: string | null;
    urls?:               URL[];
    url?:                string;
    hight?:              null;
    height?:             null | string | number;
    display?:            null | string;
    opacity?:            null | string;
    opticity?:           null | string;
    borderRadius?:       null | string;
    border_redius?:      null;
    sizes: string | number | null;
    alt?: string;
    columnCount: number | null;
    images?: {
        localFile?: {
            svg: {
                content: string | null;
                originalContent: string | null;
            }
        }
    }
    image?: string;
    title?: string | null,
    link?: string | null,
    linkText?: string | null ,
    description?: string | null,
}

export type Option = {
    slug:  string;
    label: string;
}

export type URL = {
    url:            string;
    type:           string;
    color:          null;
    display:        null;
    fontSize:       null;
    textAlign:      null;
    hoverColor:     null;
    textDecoration: null;
    title: string;
    target: null | string;
}

export type DataPublish = {
    Status:       null;
    status:       string;
    publish:      PublishPublish;
    visibility:   string[];
    publishedOn:  null;
    published_on: null;
}

export type PublishPublish = {
    password: null;
}
