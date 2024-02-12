import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";

export const Pages= {

    slug:'pages',
    labels:{
        singular:'Page',
        plural:'Pages'

    },
    access:{
        read:()=>true,
    },
    fields:[
        {
            name:'name',
            label:'Name',
            type:'text',
            required:true,
          
            
        },
        {
            name:'slug',
            label:'Slug',
            type:'text',
            required:true,

        },
        {
           name:'layout',
           label:'Layout',
           type:'blocks',
           blocks:[
            Hero,TwoColumn,
            
           ]
        },
        {
            name: 'pageMeta', // required
            type: 'group', // required
            interfaceName: 'Meta', // optional
            fields: [
              // required
              {
                name: 'title',
                type: 'text',
                required: true,
                minLength: 20,
                maxLength: 100,
              },
              {
                name: 'description',
                type: 'textarea',
                required: true,
                minLength: 40,
                maxLength: 160,
              },
            ],
          },
    ] 
}  