import React from 'react';
import Category from './Category';
import './Categories.css';
import SearchContainer from '../../widgets/containers/Search-container';
import Media from '../../playlist/components/Media';

function Categories(props)  {
    return(
        <div className="Categories">
            <SearchContainer />
            {
                props.isLoading &&
                <p>Buscando tus videos favoritos....</p>
            }
            {
                props.search.map((item) => {
                    return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')} />
                })
            }
            {
                props.categories.map((item) => {
                    return(
                        <Category 
                        key={item.get('id')}
                        {...item.toJS()}
                        handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    ) 
}

export default Categories;
