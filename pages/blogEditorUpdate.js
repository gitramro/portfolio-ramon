import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';
import { getBlogById,updateBlog } from '../actions';

class blogEditorUpdate extends Component {

  static async getInitialProps({ query }) {
    const blogId = query.id;
    let blog = {};
    try {
      blog = await getBlogById(blogId);
    } catch (e) {
      console.log(e);
    }
    return { blog };
  }

  state = {
    isSaving:false
  }

  updateBlog = (story, heading) => {
    const { blog } = this.props.pageProps;

    const updatedBlog = {}
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;

    this.setState({ isSaving: true });

    updateBlog(updatedBlog, blog._id).then(updateBlog => {
      toast.success('Blog Saved');
      this.setState({ isSaving: false });
    }).catch(err => {
      this.setState({ isSaving: false });
      const message = err.message || 'Server Error!';
      toast.error('Unexpected Error, Copy your progress and refresh browser.');
      console.log(message)
    })
  }


  render() {
    const { blog } = this.props.pageProps; //WHY IS COMING FROM PAGEPROPS?
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor initialValue={blog.story} isLoading={isSaving} save={this.updateBlog}/>
         </BasePage>   
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(blogEditorUpdate);
