import React, {useState} from 'react';
import {Editor} from "@tinymce/tinymce-react/lib/cjs/main/ts";

const TextEditor = ({onChange}) => {
    function handleEditorOnChange(event){
        event.preventDefault();
        let value = event.target.getContent();
        console.log(value);

        onChange({target: {value: value}});
    }

    const fullPlugins = 'codesample print preview fullpage powerpaste casechange importcss tinydrive ' +
                        'searchreplace autolink autosave save directionality advcode visualblocks visualchars ' +
                        'fullscreen image link media mediaembed template table charmap hr pagebreak nonbreaking ' +
                        'anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker ' +
                        'a11ychecker imagetools textpattern noneditable help formatpainter permanentpen ' +
                        'pageembed charmap tinycomments mentions quickbars linkchecker emoticons code';

    const freePlugins = 'codesample print preview fullpage importcss ' +
        'searchreplace autolink autosave save directionality visualblocks visualchars ' +
        'fullscreen image link media template table charmap hr nonbreaking ' +
        'anchor toc insertdatetime advlist lists wordcount ' +
        'imagetools textpattern noneditable help ' +
        'charmap quickbars emoticons code';

    const plugins = 'codesample print preview fullpage powerpaste casechange importcss tinydrive ' +
        'searchreplace autolink autosave save directionality advcode visualblocks visualchars ' +
        'fullscreen image link media mediaembed template table charmap hr nonbreaking ' +
        'anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker ' +
        'a11ychecker imagetools textpattern noneditable help formatpainter permanentpen ' +
        'pageembed charmap tinycomments mentions quickbars linkchecker emoticons code';

    return <Editor
                onChange={handleEditorOnChange}
                init={{
                    width : "100%",
                    height:"200px",
                    plugins: freePlugins,
                    external_plugins: { tiny_mce_wiris: 'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js' },
                    toolbar: "tiny_mce_wiris_formulaEditor | tiny_mce_wiris_formulaEditorChemistry | "+freePlugins.replace(" ","|"),
                    paste_data_image: true,
            }}/>

};
export default TextEditor;
