import './HomeCSS/Ad.css'
function Ad(){

    return (
        <div className="Ad">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-target-to="0" class="active">

                    </li>
                    <li data-target="#myCarousel" data-target-to="1">

                    </li>

                </ol>
            <div class="carousel-item active">
                <h1>Example Headline</h1>
                <p>nowy film opowiadajacy o czym tam</p>
                <img src="../.">

            </div>
            </div>


        </div>

    )

}
export default Ad