const pager = require('../../lib/pager');
const shared = require('../../shared');

/**
 * Controller : List Blog Design
 * HTTP Method : GET
 * PATH : /blogdesign
 *
 * @returns {function(*, *, *)}
 */

const list = (req, res) => {
  const store = shared.context.getStoreMain();
  const BlogDesigns = store.models.BlogDesigns;
  const attributes = Object.keys(req.swagger.operation.responses['200'].schema.items.properties);
  const limit = req.query.limit;
  const offset = req.query.offset;
  return Promise.resolve()
    .then(() => {
      return BlogDesigns.count();
    })
    .then(count => {
      pager.setResHeader(res, limit, offset, count);
      const options = {
        attributes,
        limit,
        offset,
      };
      return BlogDesigns.findAll(options);
    })
    .then(list => {
      res.json(list);
    })
    ;
};

/**
 * Controller : Create  User Blog Entry
 * HTTP Method : POST
 * PATH : /userblogentry
 *
 * @returns {function(*, *)}
 */

const create = (req, res) => {
  const store = shared.context.getStoreMain();
  const BlogDesigns = store.models.BlogDesigns;
  return Promise.resolve()
    .then(() => {
      var data = new Object();
      data.name = req.body.name;
      data.background_image = req.body.background_image;
      data.base_color = req.body.base_color;
      return BlogDesigns.create(data);
    })
    .then(data => {
      res.json(data);
    })
    ;
}

module.exports = {
  'blog_design#list': list,
  'blog_design#create': create,
};
