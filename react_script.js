class Post extends React.Component
{
    constructor(props)
    {
    
    }
    render()
    {
        return (
            <div id="post"> 
                <div id="news_date"> </div>
                <div id="news_header"> </div>
                <div id="news_content"> </div>
                <div id="read_more"> Read More... </div>
            </div>;
        );
    }
};

ReactDOM.render(
    <Post />,
    document.querySelector("#s6")
);