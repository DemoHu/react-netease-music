import React, { useEffect } from 'react'
import HomeLayout from '../../components/HomeLayout'
import Scroll from '../../components/Scroll'
import Loading from '../../components/Loading'
import './index.scss'
import store from '../../store'

function Rank(props) {
  const {history, match } = props
  const rank = store.useStore('rank')
  const { officalList, globalList, getRank } = rank
  useEffect(() => {
    officalList.length === 0 && getRank()
  }, [])

  const detail = id => {
    history.push(`${match.path}/${id}`)
  }

  return (
    <>
      <HomeLayout />
      {officalList.length === 0 ? <Loading /> :
        <div className="rank">
          <Scroll>
            <div>
              <div className="offical">
                {officalList.length > 0 && <h3>官方榜</h3>}
                <div className="offical_list">
                  {officalList.map(item => {
                    return (<div className="offical_item" key={item.id} onClick={() => detail(item.id)}>
                      <div className="img_wrapper">
                        <img src={item.coverImgUrl} alt={item.name} />
                        <span className="update_frequecy">{item.updateFrequency}</span>
                      </div>
                      <div className="info">
                        {item.tracks.map((tracks, index) => {
                          return (
                            <div className="tracks_item" key={index}>
                              {index+1}. {tracks.first} - {tracks.second}
                            </div>
                          )
                        })}
                      </div>
                    </div>)
                  })}
                </div>
              </div>
              <div className="global">
                {globalList.length > 0 && <h3>全球榜</h3>}
                <div className="global_list">
                  {globalList.map(item => {
                    return (<ul className="global_item" key={item.id} onClick={() => detail(item.id)}>
                      <li className="img_wrapper">
                        <img src={item.coverImgUrl} alt={item.name} />
                        <span className="update_frequecy">{item.updateFrequency}</span>
                      </li>
                    </ul>)
                  })}
                </div>
              </div>
            </div>
          </Scroll>
        </div>
      }
    </>
  )
}
export default React.memo(Rank)
