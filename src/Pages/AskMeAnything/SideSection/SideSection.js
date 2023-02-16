
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";


const SideSection = ({handleNewChat, questionAns,setPrompt,setResponse}) => {
  // const [historyId, setHistoryId] = useState('')
  // const [historyAns, setHistoryAns] = useState({})
  // setPrompt(historyAns.question)
  // setResponse(historyAns.answer)
  // const handleHistory=(id,)=>{
  //   setHistoryId(id)
  // }
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/apiAnsHistory?id=${historyId}`)
  //     .then((res) => res.json())
  //     .then((data) => setHistoryAns(data));
  // }, [historyId]);
  // useEffect(() => {
    
  // }, []);
  return (
    <div className="px-4 py-5">
      <div>
        <button onClick={handleNewChat} className="btn border[1px] w-full border-white hover:border-white font-semibold text-white">
          <AiOutlinePlus className="text-white font-semibold mr-3" />
          New-Chat
        </button>
      </div>
      <div className="grid justify-items-center">
        {
          questionAns?.map((ans)=> <div className="mt-2 cursor-pointer border-solid bg-slate-600 rounded-lg border-2 border-white w-full my-2">
            <Link to={`/hexa-ai/${ans._id}`} className="text-white  p-6">{ans.question}</Link ></div> )
        }
      </div>
    </div>
  );
};

export default SideSection;
