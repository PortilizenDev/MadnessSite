/*
  id: text id: ex: baxkBtn
  href: the file your heading too. ex: blog.html
  inital: what comes before the href: ex: ../MadnessSite/Pages
*/
function setHref(id, href, inital="/MadnessSite/Pages/") {
  var a = document.getElementById(id);
  a.href = inital + href;
}

setHref('BlogsPage', 'BlogList.html')
setHref('BlogsPageCred', 'BlogList.html', "./")

setHref('blog1', 'Blog/Blog1.html')

setHref('CreditsPage', 'Credits.html')
setHref('CreditsPageBlog', 'Credits.html', "./")

setHref('backBtn', 'index.html', '../')
setHref('backBtnBlogs', 'index.html', '.../')
