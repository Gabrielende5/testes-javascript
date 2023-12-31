import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import {JSDOM} from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
let dom
let container

describe('testando o index.html', ()=>{
    beforeEach(()=>{
        const options = {
            resource: 'usable',
            runScripts: 'dangerously',
        }
        dom = new JSDOM(html,options)
        container = dom.window.document.body
    })
    it('checando se eu tenho um titulo h1',()=>{
        let h1Element = container.querySelector('h1')
        expect(h1Element).not.toBeNull()
        let textH1 = getByText(container,"Testando Apps")
        expect(textH1).toBeInTheDocument()
    })
})