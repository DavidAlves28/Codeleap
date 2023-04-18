import { Routes , Route ,BrowserRouter} from 'react-router-dom'

import SignUp from '../Pages/SignUp'
import HomePage from '../Pages/HomePage'

export default function Router (){
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<SignUp/>} />
            <Route path='/Home/:userName' element={<HomePage/>} />
        </Routes>
        </BrowserRouter>
    )
}