import React, {Fragment} from 'react';
import Header from '../../../components/header'
import PageTitle from '../../../components/pagetitle'
import BlogList from '../../../components/BlogList'
import './style.css'
import Footer from '../../../components/footer'
import Scrollbar from '../../../components/scrollbar'


const AdminBlogPage =() => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Admin Blog'}/> 
            <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Please fill in the blog details</h3>
                            <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                <div className="form-inputs">
                                    <input placeholder="Title" type="text"/>
                                    <input type="date"/>
                                    <input placeholder="Upload Picture " type="file"/>
                                     <input placeholder="Title" type="text"/>
            
                                </div>
                                <div className="form-textarea">
                                    <textarea id="message" placeholder="Write Your Message..."></textarea>
                                </div>
                                <div className="form-submit">
                                <div className="form-inputs">
                                    <input id="submit" value="Upload" type="submit"/>
                                 <input value="Reset" type="reset"/>
                                 </div>
                                </div>
                             
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <BlogList/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AdminBlogPage;

