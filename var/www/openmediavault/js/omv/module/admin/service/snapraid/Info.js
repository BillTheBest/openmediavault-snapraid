/**
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @author    OpenMediaVault Plugin Developers <plugins@omv-extras.org>
 * @copyright Copyright (c) 2009-2013 Volker Theile
 * @copyright Copyright (c) 2013-2014 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/panel/Panel.js")

Ext.define("OMV.module.admin.service.snapraid.Info", {
    extend : "Ext.panel.Panel",

    autoScroll : true,

    initComponent : function() {
        var me = this;

        me.html = "<ul>" +
                    "<li>snapraid v5.2 by Andrea Mazzoleni, http://snapraid.sourceforge.net</li>" +
                    "<li><a href='http://snapraid.sourceforge.net/manual.html' target=_blank>" + _("SnapRAID user manual") + "</a></li>" +
                  "</ul>" +
                  _("The following excludes are written to the snapraid config file by default:") +
                  "<ul>" +
                    "<li>*.bak</li>" +
                    "<li>*.unrecoverable</li>" +
                    "<li>/tmp/</li>" +
                    "<li>lost+found/</li>" +
                    "<li>.content</li>" +
                    "<li>aquota.group</li>" +
                    "<li>aquota.user</li>" +
                  "</ul>";
        me.callParent(arguments);
    }
});

OMV.WorkspaceManager.registerPanel({
    id        : "info",
    path      : "/service/snapraid",
    text      : _("Information"),
    position  : 70,
    className : "OMV.module.admin.service.snapraid.Info"
});
