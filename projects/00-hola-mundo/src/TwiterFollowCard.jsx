export function TwitterFollowCard () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                src="https://unavatar.io/midudev" 
                alt="El avatar de midudev"
                className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Duran</strong>
                    <span
                    className='tw-followCard-infoUserName'>@midudev
                    </span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article> 
    )
}