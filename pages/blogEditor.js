import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';
import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';
import { createBlog } from '../actions/index'

class blogEditor extends Component {

  state = {
    isSaving: false,
    lockId: Math.floor(1000 + Math.random() * 9000)
  }


  saveBlog = (story, heading) => {
    const { lockId } = this.state;
    const blog = {}
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;
    this.setState({ isSaving: true });
    createBlog(blog, lockId).then((createdBlog) => {
      this.setState({ isSaving: false });
      toast.success('Blog Saved');
      Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
    }).catch((err) => {
      toast.error('Unexpected Error, Copy your progress and refresh browser.');
      const message = err.message || 'Server Error';
      console.log(message);
    })
    
  }


  render() {
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor isLoading={isSaving} save={this.saveBlog}/>
         </BasePage>   
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(blogEditor);
